import type { NextApiRequest, NextApiResponse } from 'next';
import { getPlaiceholder } from 'plaiceholder';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await addBlur(req.body);
  res.status(200).json(JSON.stringify(data));
};

const addBlur = async (arrList: any[]) => {
  let temp = arrList;
  for (let i = 0; i < temp.length; i++) {
    const { base64: blur } = await getPlaiceholder(temp[i].image.url, { size: 10 });
    temp[i] = {
      ...temp[i],
      blur: blur,
    };
  }
  return temp;
};
