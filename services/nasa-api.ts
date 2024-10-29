"use server"
import { NextApiRequest, NextApiResponse } from 'next';
import { APODItem } from '@/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&count=10&media_type=image`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data: APODItem[] = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
