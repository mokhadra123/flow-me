// import { createContext, useContext, useState } from "react";

// export const ToggleContext = createContext();

// const ToggleDrawer = ({ children }) => {
//   const [showDrawer, setShowDrawer] = useState(false);

//   const openDrawer = () => {
//     setShowDrawer(true);
//   };

//   const closeDrawer = () => {
//     setShowDrawer(false);
//   };

//   return (
//     <ToggleContext.Provider value={{ showDrawer, openDrawer, closeDrawer }}>
//       {children}
//     </ToggleContext.Provider>
//   );
// };
// export const useToggleContext = () => {
//   return useContext(ToggleContext);
// };

// export default ToggleDrawer;
