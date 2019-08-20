import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Input, Row, Col, Button, message } from 'antd';
import {Copyright , StyledForm} from '../../style'
import api from 'api';
const { forgetPassword, sendSms } = api;
const FormItem = Form.Item;
class ForgetPassword extends PureComponent {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    disabled: false,
    smsBtnVal: '获取验证码',
    seconds: 120
  };

  handleOk = () => {
    const { form } = this.props;
    const { validateFieldsAndScroll, resetFields } = form;
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      forgetPassword(values).then(res => {
        if (res.code === '1') {
          message.success(res.msg);
          resetFields();
        } else {
          message.error(res.msg);
        }
      });
    });
  };

  tick = () => {
    this.setState({
      disabled: true,
      smsBtnVal: this.state.seconds + '秒后重发'
    });
    this.timer && clearInterval(this.timer);
    let seconds = this.state.seconds;
    this.timer = setInterval(() => {
      if (seconds <= 0) {
        this.setState({
          disabled: false,
          smsBtnVal: '获取验证码',
          seconds: 120
        });
      } else {
        this.setState({
          seconds: seconds--,
          smsBtnVal: seconds + '秒后重发'
        });
      }
    }, 1000);
  };

  handleSms = e => {
    const userPhone = document.querySelector('#userPhone').value;
    const smsType = '20001';
    sendSms({ userPhone, smsType }).then(res => {
      if (res.code === '1') {
        message.success(res.msg);
        this.tick();
      } else {
        message.error(res.msg);
      }
    });
  };
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirmPassword'], { force: true });
    }
    callback();
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('newPassword')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 }
      }
    };
    return (
      <Fragment>
        <Copyright >Copyright ©2019 深圳煜哲商业控股集团有限公司, Inc. All rights reserved.</Copyright>
        <StyledForm >
          <Form>
            <div className="formTitle">Forget Password</div>
            <Row gutter={20}>
              <Col span={15}>
                <FormItem {...formItemLayout} label="手机号码">
                  {getFieldDecorator('userPhone', {
                    rules: [
                      {
                        max: 11,
                        pattern: /^1[34578]\d{9}$/,
                        message: '请正确输入手机号码'
                      },
                      {
                        required: true
                      }
                    ],
                    validateTrigger: 'onBlur'
                  })(<Input />)}
                </FormItem>
              </Col>
              <Col span={5}>
                <FormItem>
                  {getFieldDecorator('smsCode', {
                    rules: [
                      {
                        max: 4,
                        message: '请正确输入验证码'
                      },
                      {
                        required: true
                      }
                    ],
                    validateTrigger: 'onBlur'
                  })(<Input />)}
                </FormItem>
              </Col>
              <Col span={4}>
                <Button disabled={this.state.disabled} onClick={this.handleSms}>
                  {this.state.smsBtnVal}
                </Button>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={15}>
                <FormItem {...formItemLayout} label="新密码">
                  {getFieldDecorator('newPassword', {
                    rules: [
                      {
                        required: true,
                        message: '请输入新密码'
                      },
                      {
                        validator: this.validateToNextPassword
                      }
                    ]
                  })(<Input type="password" />)}
                </FormItem>
              </Col>
            </Row>

            <Row gutter={20}>
              <Col span={15}>
                <FormItem {...formItemLayout} label="确认新密码">
                  {getFieldDecorator('confirmPassword', {
                    rules: [
                      {
                        required: true,
                        message: '请确认新密码'
                      },
                      {
                        validator: this.compareToFirstPassword
                      }
                    ]
                  })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
                </FormItem>
              </Col>
              <Col span={5}>
                <Button onClick={this.handleOk}>确认修改</Button>
              </Col>
            </Row>

            <div className="text-center mt20 fz15">
              <Link to="/login/loginlanding" className="vm color-gray">
              Sign in here
              </Link>
            </div>
          </Form>
        </StyledForm>
      </Fragment>
    );
  }
}
ForgetPassword.propTypes = {
  form: PropTypes.object
};

export default Form.create()(ForgetPassword);
