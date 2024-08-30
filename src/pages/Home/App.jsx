import { Box } from "@chakra-ui/react";
import { useState } from "react";

import HomeComp from "../../components/HomeComp/index.jsx";
import LandingComp from "../../components/LandingComp/index.jsx";

function App() {

  let [userLogin, setUserLogin ] = useState(true);

  return (
    <Box>
      Bachat Book (بچت بُک)
      {
        userLogin ? <HomeComp /> : <LandingComp />
      }
    </Box>
  );
}

export default App;