import { Button, Modal } from "antd";
import { useState } from "react";
import Plot from "react-plotly.js";
import { Wrapper, DashboardItem } from "./style";

const plotLayout = {
  width: 350,
  height: 300,
  showlegend: false,
  margin: {
    l: 20,
    r: 20,
    b: 20,
    t: 20,
  },
  title: false,
};

const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Wrapper className="neo">
      <Modal
        open={modalVisible}
        onCancel={closeModal}
        onOk={closeModal}
        centered
        width={1200}
        height={800}
      >
        <Plot
          data={[
            {
              values: [19, 26, 55],
              labels: ["house 1", "house 2", "house 3"],
              type: "pie",
            },
          ]}
          layout={{ ...plotLayout, width: 500, height: 500 }}
        />
        <h1>Hello world</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
      </Modal>
      <h1>Dashboard</h1>
      <hr />
      <DashboardItem className="neo">
        <h3>
          Investments - 23500${" "}
          <Button onClick={() => setModalVisible(true)}>Details</Button>
        </h3>

        <Plot
          data={[
            {
              values: [19, 26, 55],
              labels: ["house 1", "house 2", "house 3"],
              type: "pie",
            },
          ]}
          layout={plotLayout}
        />
      </DashboardItem>
      <DashboardItem className="neo">
        <h3>
          Lorem ipsum{" "}
          <Button onClick={() => setModalVisible(true)}>Details</Button>
        </h3>

        <Plot
          data={[
            {
              x: ["giraffes", "orangutans", "monkeys"],
              y: [20, 14, 23],
              type: "bar",
            },
          ]}
          layout={plotLayout}
        />
      </DashboardItem>
      <DashboardItem className="neo">
        <h3>
          Dolor sit{" "}
          <Button onClick={() => setModalVisible(true)}>Details</Button>
        </h3>

        <Plot
          data={[
            {
              x: [1, 2, 3, 4],
              y: [10, 15, 13, 17],
              type: "scatter",
            },
            {
              x: [1, 2, 3, 4],
              y: [16, 5, 11, 9],
              type: "scatter",
            },
          ]}
          layout={plotLayout}
        />
      </DashboardItem>
      <DashboardItem className="neo">
        <h3>
          Constetur amet{" "}
          <Button onClick={() => setModalVisible(true)}>Details</Button>
        </h3>

        <Plot
          data={[
            {
              y: [0, 1, 1, 2, 3, 5, 8, 13, 21],
              boxpoints: "all",
              jitter: 0.3,
              pointpos: -1.8,
              type: "box",
            },
          ]}
          layout={plotLayout}
        />
      </DashboardItem>
      <DashboardItem className="neo">
        <h3>
          Eiusmod tempor{" "}
          <Button onClick={() => setModalVisible(true)}>Details</Button>
        </h3>

        <Plot
          data={[
            {
              x: [1, 2, 3, 4],
              y: [10, 11, 12, 13],
              mode: "markers",
              marker: {
                size: [40, 60, 80, 100],
              },
            },
          ]}
          layout={{
            title: "Marker Size",
            showlegend: false,
            height: 600,
            width: 600,
            ...plotLayout,
          }}
        />
      </DashboardItem>
      <DashboardItem className="neo">
        <h3>
          Magna aliqua{" "}
          <Button onClick={() => setModalVisible(true)}>Details</Button>
        </h3>

        <Plot
          data={[
            {
              x: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
              type: "bar",
              name: "Primary Product",
              marker: {
                color: "rgb(49,130,189)",
                opacity: 0.7,
              },
            },
            {
              x: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
              type: "bar",
              name: "Secondary Product",
              marker: {
                color: "rgb(204,204,204)",
                opacity: 0.5,
              },
            },
          ]}
          layout={plotLayout}
        />
      </DashboardItem>
    </Wrapper>
  );
};

export default Dashboard;
