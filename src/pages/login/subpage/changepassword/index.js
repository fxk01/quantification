import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Form,
  Input,
  Row,
  Col,
  Button,
  message
} from 'antd';
import {Copyright , StyledForm} from '../../style'
import api from 'api'
const  {updatePassword} = api
const FormItem = Form.Item;
class ChangePassword extends PureComponent {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleOk = () => {
    const { form } = this.props;
    const { validateFieldsAndScroll ,resetFields} = form;
    validateFieldsAndScroll((errors, values) => {
      console.log(values)
      if (errors) {
        return;
      }
      updatePassword(values).then(res=>{
        if(res.code==='1'){
          message.success(res.msg);
          resetFields()
        }else{
          message.error(res.msg)
        }
      })
    });
  };
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
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
      callback('两次密码输入不一致!');
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
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
      }
    };
    return (
      <Fragment>
        <Copyright >Copyright ©2019 深圳煜哲商业控股集团有限公司, Inc. All rights reserved.</Copyright>
        <StyledForm >
          <Form>
            <div className="formTitle">Change Password</div>
            <FormItem {...formItemLayout} label="账户名">
              <Row gutter={20}>
                <Col span={18}>
                  {getFieldDecorator('userEmail', {
                    rules: [
                      {
                        type: 'email',
                        message: '请输入正确邮箱格式'
                      },
                      {
                        required: true
                      }
                    ]
                  })(<Input />)}
                </Col>
              </Row>
            </FormItem>
            <FormItem {...formItemLayout} label="原密码">
              <Row gutter={20}>
                <Col span={18}>
                  {getFieldDecorator('oldPassword', {
                    rules: [
                      {
                        required: true,
                        message: '请输入原密码'
                      }
                    ]
                  })(<Input type="password" />)}
                </Col>
              </Row>
            </FormItem>
            <FormItem {...formItemLayout} label="新密码">
              <Row gutter={20}>
                <Col span={18}>
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
                </Col>
              </Row>
            </FormItem>
            <FormItem {...formItemLayout} label="确认新密码">
              <Row gutter={20}>
                <Col span={18}>
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
                </Col>
                <Col span={6} >
                  <Button onClick ={this.handleOk}>确认修改</Button>
                </Col>
              </Row>
            </FormItem>
            <div className="text-center mt20 fz15">
              {/* <span className="vm color-gray">Already got an account? </span> */}
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
ChangePassword.propTypes = {
  form: PropTypes.object
};



export default Form.create()(ChangePassword);
