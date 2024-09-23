import styles from "./page.module.scss";
import Table from "@/components/Table/Table";


export default function Home() {
  return (
    <div className={styles.page}>
      <Table></Table>
    </div>
  );
}
