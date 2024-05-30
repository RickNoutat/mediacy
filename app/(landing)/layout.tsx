interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      <BackgroundImage />
      {/* <Navbar /> */}
      {children}
    </>
  );
};

export default LandingLayout;
