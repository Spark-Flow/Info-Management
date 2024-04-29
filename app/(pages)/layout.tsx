const PagesLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="p-10">
      {children}
    </div>
  );
};

export default PagesLayout;

