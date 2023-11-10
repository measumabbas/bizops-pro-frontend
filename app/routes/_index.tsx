import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Bizops-pro' },
    { name: 'description', content: 'Welcome to Bizops-pro!' },
  ];
};

export default function Index() {
  return (
    <div>
    </div>
  );
}
