import StudentInfo from './student-info';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container-fluid ml-40 mt-20'>
      <p className='h1'>CPRG 306: Web Development 2 - Assignments</p>
      <StudentInfo />
      <Link href="/week2/">
        Week 2
      </Link>
    </div>    
  );
}
