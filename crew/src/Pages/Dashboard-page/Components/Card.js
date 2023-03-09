import { Card } from "antd";
import Chart from "./Chart";
import Piechart from "./Piechart";
import "../../../index.css";
import Activity from "./activity";
import Tasklist from "./Tasklist";
import { Point } from "./Piechart";
import { Scatterchart } from "./Scatter";
import { Doughnut } from "./Dougnut";
const Cardpage = () => (
  //   <Space direction="vertical" size={16}>
  <>
    <div className="row g-4">
      <div className="col-md-8">
        <Card
          style={{
            width: "auto",
            height: "100%",
          }}
        >
          <Chart style={{ height: "350px" }} />
        </Card>
      </div>
      <div className="col-md-4">
        <Card style={{ width: "400px", height: "100%" }}>
          <Piechart />
        </Card>
      </div>

      <div className="col-md-4">
        <Card style={{ width: "400px", height: "100%" }}>
          <Activity />
        </Card>
      </div>
      <div className="col-md-8">
        <Card>
          <Scatterchart style={{ height: "100%", width: "100%" }} />
        </Card>
      </div>
      <div className="col-md-4">
        <Card style={{ width: "400px", height: "100%" }}>
          <Doughnut />
        </Card>
      </div>
      <div className="col-md-8">
        <Card style={{ height: "100%" }}>
          <Tasklist />
        </Card>
      </div>
    </div>
  </>

  //   </Space>
);
export default Cardpage;
