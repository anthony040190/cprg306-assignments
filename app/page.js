import StudentInfo from './student-info';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container-fluid ml-40 mt-20'>
      <p className='text-4xl text-center'>CPRG 306: Web Development 2 - Assignments</p>
      <div className='text-center mt-20'>
        <p><StudentInfo /></p>
        <p className='py-1'><Link href="/week2/">Week 2</Link></p>
        <p className='py-1'><Link href="/week3/">Week 3</Link></p>
      </div>
    </div>    
  );
}
