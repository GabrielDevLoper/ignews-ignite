import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Gabriel" },
    { id: 2, name: "Vitor" },
    { id: 3, name: "Cleiton" },
    { id: 4, name: "Ewellin" },
    { id: 5, name: "Camilla" },
    { id: 6, name: "Felipe" },
  ];

  return response.json(users);
};
