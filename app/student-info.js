import Link from "next/link";

export default function StudentInfo() {
    return (
        <div>
            <div>
                <p>Name: Anthony Magpantay</p>
            </div>

            <div>
                <p>Course and section: CPRG 306 F</p>
            </div>

            <div>
                <p>
                    <Link href="https://github.com/anthony040190">
                        https://github.com/anthony040190
                    </Link>    
                </p>
            </div>
        </div>
    );
}