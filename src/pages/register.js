import { Form, Input, Button, Card } from 'antd';
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();

  const onFinish = (values) => {
    console.log('Success:', values);
    router.push('/login'); 
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card title="Register" style={{ width: 350 }}>
    <Form name="login" onFinish={onFinish}>
      <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
         Register
        </Button>
      </Form.Item>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ marginRight: 5 }}>Have an account?</span>
            <Button type="link" htmlType="button" onClick={() => router.push('/login')} style={{ padding: 0}}>
              Login
            </Button>
        </div> 
    </Form>
    </Card>
    </div>
  );
};

export default Register;
