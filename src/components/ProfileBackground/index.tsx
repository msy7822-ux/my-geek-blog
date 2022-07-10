import { FaChild, FaBuilding } from 'react-icons/fa';
import { BsFillCalendar3WeekFill } from 'react-icons/bs';
import styles from './styles.module.scss';
import CustomBreak from '@/components/CustomBreak';

// 現在の職務
// const CurrentDuty = () => {
//   return (
//     <table>
//       <tr>
//         <th>職務</th>
//         <td>
//           2022 - 現在
//           <br />
//           フロントエンドエンジニア（React）
//         </td>
//       </tr>
//     </table>
//     // <div className={styles.currentDutyContainer}>
//     //   <p>職務</p>
//     //   <div className={styles.currentDutyDetail}>
//     //     <p>2022 - 現在</p>
//     //     <p>フロントエンドエンジニア（React）</p>
//     //   </div>
//     // </div>
//   );
// };

// 職務経歴
const CareerBackground = () => {
  return (
    <div className={styles.careerBackgrounds}>
      <div className={styles.container}>
        <p className={styles.tableHeadDate}>
          期間
          <BsFillCalendar3WeekFill className={styles.backgroundIcon} />
        </p>
        <div className={styles.details}>
          <p className={styles.tableHeadCompany}>
            企業名
            <FaBuilding className={styles.backgroundIcon} />
          </p>
          <p className={styles.tableHeadDetail}>
            実績
            <FaChild className={styles.backgroundIcon} />
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <p>2022/05 - 現在</p>
        <div className={styles.details}>
          <p className={styles.companyName}>ポート株式会社</p>
          <p className={styles.backgroundDetail}>
            キャリアパークという就活生向けのメディアの開発に携わっていました。
            <CustomBreak />
            Rails + Webpack(not Webpacker) +
            Reactというスタックで、主にフロントエンドを担当しており、ユーザー向けのフォームの改修や管理画面の改修（文言修正、モーダルの差し込みなど細々）やRails
            viewをReactにリプレイスするなどを行っておりました。
            <CustomBreak />
            またバックエンド側でも過去にRailsの経験があったことからAPIの実装なども担当しておりました。
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <p>2021/10 - 2022/05</p>
        <div className={styles.details}>
          <p className={styles.companyName}>ポート株式会社</p>
          <p className={styles.backgroundDetail}>
            就活会議という就活生向けのメディアの開発に携わっていました。
            <CustomBreak />
            バックエンド（Rails）、フロントエンド（Rails view or
            webpackerのReact）でユーザー向け画面のお問い合わせフォームの実装や、ユーザーへの就活サービスのレコメンド機能実装、LPページの実装、管理画面で「クライアント向けのお知らせをCSが作成・投稿・編集できる機能実装（DB設計からバックエンド・フロンエンドの実装まで）を担当しておりました。
            <CustomBreak />
            また、クライアント向けの管理画面では元々React（JavaScript）で且つクラスコンポーネントで書かれていたものを関数コンポーネントで且つTypeScriptに書き換えるという移行作業も担当しておりました。
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <p>2020/12 - 2021/08</p>
        <div className={styles.details}>
          <p className={styles.companyName}>株式会社Yojo Technologies</p>
          <p className={styles.backgroundDetail}>
            Railsを用いた管理画面のバックエンド（API）の実装や、ユーザー向けに開発されたLINE
            Botの開発を主に行なっていました。
            <CustomBreak />
            管理画面では、その日の配送データのCSVファイルをアップロードすると、管理画面上にそのデータを反映する機能のバックエンドの実装や売り上げデータをspreadsheetなどに出力する機能の実装、また日毎の売り上げをslackに通知する機能の実装など担当しておりました。
            <CustomBreak />
            LINE
            Botの開発では、ユーザー向けのリッチメニューでの問い合わせ機能の実装などを担当しておりました。
            <CustomBreak />
            また、管理画面のフロントエンド部分でReact（TypeScript）を採用しており、フロントエンドの画面実装も少し経験しました。
          </p>
        </div>
      </div>
    </div>
  );
};

// 学歴
const EducationalBackground = () => {
  return <div>{/* <>ssss</> */}</div>;
};

const ProfileBackground = () => {
  return (
    <div>
      <div className={styles.profileBackgroundContainer}>
        <h3 className={styles.profileBackgroundTitle}>経歴</h3>
        <CareerBackground />
        <EducationalBackground />
      </div>
    </div>
  );
};

export default ProfileBackground;
