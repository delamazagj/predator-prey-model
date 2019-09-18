import React, { Component } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";

const TableSample = props => {
  //console.log(props);

  let index = props.index;
  let prey = { ...props.data0 };
  let pred = { ...props.data1 };
  console.log(index);

  return (
    <div>
      <Table color={"teal"} inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Generation</Table.HeaderCell>
            <Table.HeaderCell>Predator</Table.HeaderCell>
            <Table.HeaderCell>Prey</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              {/* <Label ribbon>First</Label> */}
              {index + 1}
            </Table.Cell>
            <Table.Cell>{pred[0]}</Table.Cell>
            <Table.Cell>{prey[0]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{index + 2}</Table.Cell>
            <Table.Cell>{pred[1]}</Table.Cell>
            <Table.Cell>{prey[1]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{index + 3}</Table.Cell>
            <Table.Cell>{pred[2]}</Table.Cell>
            <Table.Cell>{prey[2]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{index + 4}</Table.Cell>
            <Table.Cell>{pred[3]}</Table.Cell>
            <Table.Cell>{prey[3]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{index + 5}</Table.Cell>
            <Table.Cell>{pred[4]}</Table.Cell>
            <Table.Cell>{prey[4]}</Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                {/* <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item> */}
                <Menu.Item
                  as="a"
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={() => props.showValuesTable(1)}
                >
                  1
                </Menu.Item>
                <Menu.Item
                  as="a"
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={() => props.showValuesTable(2)}
                >
                  2
                </Menu.Item>

                {/* <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item> */}
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

export default TableSample;
