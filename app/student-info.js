import Link from "next/link";

export default function StudentInfo() {
    return (
        <div>
            <p className="py-1">Name: Anthony Magpantay</p>

            <p className="py-1">Course and section: CPRG 306 F</p>

            <p className="py-1">
                <Link href="https://github.com/anthony040190" className="underline" target="_blank">
                    https://github.com/anthony040190
                </Link>    
            </p>
        </div>
    );
}