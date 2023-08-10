"use client";

import { SafeUser, SafeInfo } from "@/app/types";
import Sidebar from "@/app/components/Sidebar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { styled } from '@mui/material/styles';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface InfoTableClientProps {
  infos?: SafeInfo[];
  currentUser?: SafeUser | null;
}

const Infos: SafeInfo[] = [
  {
    id: "64b85853ff80319d0fb0a6dd",
    userId: "64af1b57cf96ced38caeddbf",
    rosterId: "64c9a89162551d0427043691",
    entryId: "64c2b8af249ce1a377d069a9",
    firstName: "Yi",
    lastName: "Ding",
    email: null,
    phone: null,
    street: "stree4",
    city: null,
    state: null,
    country: null,
    zip: null,
    dateOfBirth: "2023-07-27T18:33:57.719+00:00",
    createdAt: "2023-07-27T18:34:23.419+00:00",
  },
  {
    id: "64b85853ff8903hf0fb0a6dd",
    userId: "64afl8jg0sf96ced38caeddbf",
    rosterId: "64c9a89162551d0427043691",
    entryId: "64c2b8af7h8j91a377d069a9",
    firstName: "Simon",
    lastName: "Tintin",
    email: null,
    phone: null,
    street: "stree12",
    city: null,
    state: null,
    country: null,
    zip: null,
    dateOfBirth: "2010-07-27T18:33:57.719+00:00",
    createdAt: "2003-07-27T18:34:23.419+00:00",
  },
  {
    id: "64b85853ff803l0k9jb0a6dd",
    userId: "64af1b57cf96ceslk84jddbf",
    rosterId: "64c9a89162551d0427043691",
    entryId: "64c2b8af249cesfwr66h69a9",
    firstName: "Justin",
    lastName: "Bibber",
    email: null,
    phone: null,
    street: "stree92",
    city: null,
    state: null,
    country: null,
    zip: null,
    dateOfBirth: "2009-04-23T18:33:57.719+00:00",
    createdAt: "2015-03-22T18:34:23.419+00:00",
  },
  {
    id: "64b859k30hs6engd0fb0a6dd",
    userId: "64af1b2jslz9jed38caeddbf",
    rosterId: "64c9a89162551d0427043691",
    entryId: "64c2b8af249ce1a377d069a9",
    firstName: "April",
    lastName: "Derk",
    email: null,
    phone: null,
    street: "stree0",
    city: null,
    state: null,
    country: null,
    zip: null,
    dateOfBirth: "2006-12-03T18:33:57.719+00:00",
    createdAt: "2021-11-19T18:34:23.419+00:00",
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const filterInfos = (infos: SafeInfo[]) => {
  return infos.map((info) => {
    const filteredInfo = {
      firstName: info.firstName !== null ? info.firstName : null,
      lastName: info.lastName !== null ? info.lastName : null,
      email: info.email !== null ? info.email : null,
      phone: info.phone !== null ? info.phone : null,
      street: info.street !== null ? info.street : null,
      city: info.city !== null ? info.city : null,
      state: info.state !== null ? info.state : null,
      country: info.country !== null ? info.country : null,
      zip: info.zip !== null ? info.zip : null,
      dateOfBirth: info.dateOfBirth !== null ? info.dateOfBirth : null,
    };
    return filteredInfo;
  });
}

const getAvailableColumns = (obj: SafeInfo) => {
  const excludedProperties = [
    "id",
    "userId",
    "rosterId",
    "entryId",
    "createdAt",
  ];

  const transformedColumns = Object.keys(obj)
    .filter((key) => {
      const value = obj[key as keyof SafeInfo];
      return value !== null && !excludedProperties.includes(key);
    })
    .map((key) => {
      const camelCasedName = key;
      const separatedName = camelCasedName.replace(/([a-z])([A-Z])/g, '$1 $2');
      const formattedName = separatedName.charAt(0).toUpperCase() + separatedName.slice(1);
      return formattedName;
    });

  return transformedColumns;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const rows = filterInfos(Infos);

const colHeaders = getAvailableColumns(Infos[0]);
const InfoTableClient: React.FC<InfoTableClientProps> = ({ infos = [] }) => {
  return (
    <Sidebar>
      <main className="h-full flex-1 px-auto overflow-y-auto">
        <Alert severity="info" sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Hello 👋</AlertTitle>
          This app uses the Next.js App Router and Material UI v5.
        </Alert>
        <div className="min-h-screen w-full max-w-7xl p-5 sm:p-10 mx-auto">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                {colHeaders.map((header) => (
                  <StyledTableCell key={header}>{header}</StyledTableCell>
                ))}
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow
                    key={row.firstName}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {row.firstName && (
                      <StyledTableCell component="th" scope="row">
                        {row.firstName}
                      </StyledTableCell>
                    )}
                    {row.lastName && (
                      <StyledTableCell component="th" scope="row">
                        {row.lastName}
                      </StyledTableCell>
                    )}
                    {row.email && (
                      <StyledTableCell component="th" scope="row">
                        {row.email}
                      </StyledTableCell>
                    )}
                    {row.phone && (
                      <StyledTableCell component="th" scope="row">
                        {row.phone}
                      </StyledTableCell>
                    )}
                    {row.street && (
                      <StyledTableCell component="th" scope="row">
                        {row.street}
                      </StyledTableCell>
                    )}
                    {row.city && (
                      <StyledTableCell component="th" scope="row">
                        {row.city}
                      </StyledTableCell>
                    )}
                    {row.state && (
                      <StyledTableCell component="th" scope="row">
                        {row.state}
                      </StyledTableCell>
                    )}
                    {row.country && (
                      <StyledTableCell component="th" scope="row">
                        {row.country}
                      </StyledTableCell>
                    )}
                    {row.zip && (
                      <StyledTableCell component="th" scope="row">
                        {row.zip}
                      </StyledTableCell>
                    )}
                    {row.dateOfBirth && (
                      <StyledTableCell component="th" scope="row">
                        {formatDate(row.dateOfBirth)}
                      </StyledTableCell>
                    )}
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </main>
    </Sidebar>
  );
};

export default InfoTableClient;
