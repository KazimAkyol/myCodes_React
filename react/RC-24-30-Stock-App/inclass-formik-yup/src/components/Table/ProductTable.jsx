import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import useStockCall from "../../hook/useStockCall";

function getRowId(row) {
  return row._id;
}

export default function ProductTable() {
  const { products } = useSelector((state) => state.stock);
  const { getDeleteData } = useStockCall();

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "categoryId",
      headerName: "Category",
      width: 150,
      editable: true,
      valueGetter: (value) => value.name,
    },
    {
      field: "brandId",
      headerName: "Brand",
      width: 150,
      editable: true,
      valueGetter: (value) => value.name,
    },
    {
      field: "name",
      headerName: "Name",
      width: 110,
      editable: true,
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      headerName: "Actions",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <DeleteIcon onClick={() => getDeleteData("products", params.id)} />
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
