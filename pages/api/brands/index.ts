// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {db} from '@/utils/firebase';
import {
  getDocsFromCache,
  getDocsFromServer,
  query,
  collection,
  orderBy,
} from 'firebase/firestore';

export default async (req, res) => {
  if (req.method === 'GET') {
    const q = query(collection(db, 'brands'), orderBy('name', 'asc'));

    let querySnapshot;
    try {
      querySnapshot = await getDocsFromCache(q);
      if (querySnapshot.empty) {
        console.log(`[Failed Fetch from Cache] Pulling from Server...`);
        querySnapshot = await getDocsFromServer(q);
      }
    } catch (err) {
      console.log(`[Failed Fetch from Cache] Pulling from Server...`);
      querySnapshot = await getDocsFromServer(q);
    }

    const brands = querySnapshot.docs.map(doc => {
      return {
        ...doc.data(),
      };
    });

    return res.status(200).json({
      brands: brands,
    });
  }
};
