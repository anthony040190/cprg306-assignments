import StudentInfo from "../student-info";

export default function Home() {
    return (
        <div>
            <div className="flex justify-between">
                <div className="align-items-center">
                    <h1>My Shopping List</h1>
                </div>
                
                <div>
                    <StudentInfo />
                </div>
            </div>
        </div>
    );
}