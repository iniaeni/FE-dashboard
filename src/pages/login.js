import { Form, Input, Button, Card } from 'antd';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  const onFinish = (values) => {
    console.log('Success:', values);
    router.push('/dashboard');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card title="Login" style={{ width: 350 }}>
    <Form name="login" onFinish={onFinish}>
      <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
         Login
        </Button>
      </Form.Item>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ marginRight: 5 }}>Don't have an account?</span>
            <Button type="link" htmlType="button" onClick={() => router.push('/register')} style={{ padding: 0}}>
              Register
            </Button>
        </div>
    </Form>
    </Card>
    </div>
  );
};

export default Login;
