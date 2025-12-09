import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AiOutlineFieldNumber } from "react-icons/ai";
import Button from "@mui/material/Button";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
export default function UpdateUi({ data,setData }) {
  const { del } = useAxios();
  async function handleDelete(id) {
    await toast.promise(
    del(id), 
    {
      pending: "O'chirilmoqda...",
      success: "Muvaffaqiyatli o'chirildi!",
      error: "O'chirishda xatolik!"
    }
  );
    const delData = data.filter((user) => user.id !== id)
    setData(delData)
  }
  return (
    <TableContainer
      component={Paper}
      sx={{
        background: "transparent",
        "& td, & th": { color: "white", borderBottom: "none" },
      }}
      className="border-gray-500/20 border"
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="border-b-gray-500/20 border">
            <TableCell
              sx={{ fontSize: "25px" }}
              className="border-t-0 border-l-0 border-b-0 border-r-gray-500/20 border "
            >
              <AiOutlineFieldNumber />
            </TableCell>
            <TableCell className="border-t-0 border-l-0 border-b-0 border-r-gray-500/20 border ">
              Name
            </TableCell>
            <TableCell
              align="start"
              className="border-t-0 border-l-0 border-b-0 border-r-gray-500/20 border "
            >
              Age
            </TableCell>
            <TableCell
              align="start"
              className="border-t-0 border-l-0 border-b-0 border-r-gray-500/20 border "
            >
              Email
            </TableCell>
            <TableCell
              sx={{ width: "200px" }}
              align="start"
              className="border-t-0 border-l-0 border-b-0 border-r-gray-500/20 border"
            >
              Edit / Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map(({ name, age, email, id }, i) => (
              <TableRow
                key={i + 1}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="border-b-gray-500/20 border cursor-pointer"
              >
                <TableCell sx={{ width: "100px" }}>{i + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="start">{age}</TableCell>
                <TableCell align="start">{email}</TableCell>
                <TableCell
                  align="start"
                  sx={{ display: "flex", gap: "10px", maxWidth: "100%" }}
                >
                  <Button variant="outlined">Edit</Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(id)}
                  >
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
