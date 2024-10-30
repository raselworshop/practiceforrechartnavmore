import { Legend, LineChart as LinChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const studentsMarks = [
        { "student_id": 1, "name": "Alice", "marks": { "math": 85, "physics": 78, "chemistry": 90, "biology": 88 } },
        { "student_id": 2, "name": "Bob", "marks": { "math": 75, "physics": 80, "chemistry": 85, "biology": 82 } },
        { "student_id": 3, "name": "Charlie", "marks": { "math": 95, "physics": 88, "chemistry": 92, "biology": 90 } },
        { "student_id": 4, "name": "David", "marks": { "math": 70, "physics": 75, "chemistry": 78, "biology": 80 } },
        { "student_id": 5, "name": "Eva", "marks": { "math": 88, "physics": 90, "chemistry": 92, "biology": 89 } },
        { "student_id": 6, "name": "Frank", "marks": { "math": 65, "physics": 70, "chemistry": 68, "biology": 74 } },
        { "student_id": 7, "name": "Grace", "marks": { "math": 78, "physics": 85, "chemistry": 80, "biology": 82 } },
        { "student_id": 8, "name": "Hannah", "marks": { "math": 82, "physics": 79, "chemistry": 88, "biology": 85 } },
        { "student_id": 9, "name": "Ian", "marks": { "math": 90, "physics": 92, "chemistry": 91, "biology": 93 } },
        { "student_id": 10, "name": "Julia", "marks": { "math": 88, "physics": 84, "chemistry": 87, "biology": 86 } }
    ]

    // { studentsMarks.map()}

    const chartData= studentsMarks.map(student=>({
        name: student.name,
        math: student.marks.math,
        physics: student.marks.physics,
        chemistry: student.marks.chemistry,
        biology: student.marks.biology,
    }))
    
    return (
        <div>
            <LinChart width={1200} height={400} data={chartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Legend></Legend>
                <Line dataKey={'math'} type={'monotone'} stroke='purple'></Line>
                <Line dataKey={'chemistry'} type={'monotone'} stroke='green'></Line>
                <Line dataKey={'biology'} type={'monotone'} stroke='blue'></Line>
                <Line dataKey={'physics'} type={'monotone'} stroke='red'></Line>
            </LinChart>
        </div>
    );
};

export default LineChart;