import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { DataProvider } from "./DataContext";
import Default from "./pages/Default";
import CreditScore from "./pages/CreditScore";
import Approved from "./pages/Approved";
import Final from "./pages/Final";
import AadharPan from "./pages/AadharPan";
import FeededDataForm from "./pages/FeededDataForm";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/credit" element={<CreditScore />} />
          <Route path="/approved" element={<Approved />} />
          <Route path="/final" element={<Final />} />
          <Route path="/aadharpan" element={<AadharPan />} />
          <Route path="/feedDataEntry" element={<FeededDataForm />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
