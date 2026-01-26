import Link from "next/link";  

export default function StudentInfo() {
  return (
    <section>
      <p>Name: Natalie Ngo</p>
      <p>GitHub:{" "}
      <Link href="https://github.com/NxGin97/cprg306-assignments.git">NxGin97/cprg306-assignments</Link>
      </p>
    </section>
  );
}