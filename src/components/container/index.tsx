type Props = {
  children: React.FC[];
};

export const Container: React.FC = ({children}) => {
  return <div className="w-screen h-screen flex flex-col">{children}</div>;
};
