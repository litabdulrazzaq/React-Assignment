import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import "./data.css";

const customStyles = {
  headRow: {
    style: {
      backgroundColor: "blue",
      color: "white",
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  },
  Cells: {
    style: {
      fontSize: "16px ",
    },
  },
};

const DataTables = () => {
  const column = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "City",
      selector: (row) => row.address.city,
    },
  ];

  useEffect(() => {
    const fetData = async () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setRecords(res.data);
          setFilterRecord(res.data);
        })

        .catch((err) => console.log(err));
    };
    fetData();
  }, []);

  const handleFilter = (e) => {
    const newData = filterRecord.filter((row) =>
      row.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRecords(newData);
  };

  const [records, setRecords] = useState([]);
  const [filterRecord, setFilterRecord] = useState([]);

  return (
    <div className="container">
      <div
        style={{
          display: "block",
          justifyContent: "right",
          margin: "10px",
          textAlign: "right",
        }}
      >
        <input
          type="text"
          onChange={handleFilter}
          placeholder="Search..."
          style={{ padding: "6px 10px", outline: "none" }}
        />
      </div>
      <DataTable
        columns={column}
        data={records}
        customStyles={customStyles}
        pagination
        selectableRows
      ></DataTable>
    </div>
  );
};

export default DataTables;
