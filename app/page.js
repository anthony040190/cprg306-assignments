import StudentInfo from './student-info';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='mt-20'>
      <p className='text-4xl text-center'>CPRG 306: Web Development 2 - Assignments</p>
      <div className='text-center mt-20'>
        <StudentInfo />
        <p className='py-1'><Link href="/week2/">Week 2</Link></p>
        <p className='py-1'><Link href="/week3/">Week 3</Link></p>
        <p className='py-1'><Link href="/week4/">Week 4</Link></p>
        <p className='py-1'><Link href="/week5/">Week 5</Link></p>
        <p className='py-1'><Link href="/week6/">Week 6</Link></p>
        <p className='py-1'><Link href="/week7/">Week 7</Link></p>
        <p className='py-1'><Link href="/week8/">Week 8</Link></p>
      </div>
    </div>    
  );
}
