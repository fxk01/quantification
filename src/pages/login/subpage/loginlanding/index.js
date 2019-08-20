import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Row, Form,  Input } from 'antd';
import logoLogin from '@/statics/images/logo_login.png';
import {Copyright , StyledForm} from '../../style'
import { actionCreators } from './store';
const FormItem = Form.Item;

class LoginLanding extends PureComponent {
  handleOk = () => {
    const { form, handLogin } = this.props;
    const { validateFieldsAndScroll } = form;
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      handLogin(values);
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Fragment>
        <Copyright >
          Copyright ©2019 深圳煜哲商业控股集团有限公司, Inc. All rights reserved.
        </Copyright>
        <StyledForm login>
          <form>
            <div className="text-center mb20">
              <img src={logoLogin} width="83" height="auto" alt="yoze" />
              <p>Log in to your Yoze Trade account</p>
            </div>
            <FormItem hasFeedback>
              {getFieldDecorator('userEmail', {
                rules: [
                  {
                    required: true
                  }
                ]
              })(
                <Input onPressEnter={this.handleOk} placeholder={'Username'} />
              )}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true
                  }
                ]
              })(
                <Input
                  type="password"
                  onPressEnter={this.handleOk}
                  placeholder={`Password`}
                />
              )}
            </FormItem>
            <Row>
              <Button type="primary" onClick={this.handleOk}>
                Log in
              </Button>
            </Row>
            <div className="text-center mt20 fz15">
              <Link to="/login/forgetpassword" className="vm color-gray">
                Forget Password
              </Link>
              <span className="vm color-gray ml10 mr10">|</span>
              <Link to="/login/changepassword" className="vm color-gray">
                Change Password
              </Link>
            </div>
          </form>
        </StyledForm>
      </Fragment>
    );
  }
}
LoginLanding.propTypes = {
  form: PropTypes.object
};

const mapStateToProps = state => ({
  
});
const mapDispatchToProps = dispatch => ({
  handLogin(payload) {
    dispatch(actionCreators.handLogin(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(LoginLanding));
