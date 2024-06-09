import { SecParagraphComp } from "../../components/Typography";
import styles from "./about.module.css";
//import { getLabels } from "../../local";
//import { useSelector } from "react-redux";
//import { selectCurrentLanguage } from "../../../redux/slices/languageSlice";

const About = () => {
  //const texts = getLabels(useSelector(selectCurrentLanguage));
  //const orderResultTexts = texts.AboutUsPage;
  //const [orderResult, setOrderResult] = useState(null);

  return (
    <div className={styles.pageContainer}>
      {/* 你的代码开始 */}
      <table
        role="presentation"
        cellspacing="0"
        cellpadding="0"
        border="0"
        width="100%"
      >
        <tr>
          <td
            valign="top"
            style={{ padding: "1em 2.5em", backgroundColor: "#ffffff" }}
          >
            <table
              role="presentation"
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
            >
              <tr>
                <td width="40%" className="logo" style={{ textAlign: "left" }}>
                  <h1>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "#000000",
                        fontSize: "20px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      MollyApply
                    </a>
                  </h1>
                </td>
                <td width="60%" className="logo" style={{ textAlign: "right" }}>
                  <ul
                    className="navigation"
                    style={{ padding: "0", margin: "0", listStyle: "none" }}
                  >
                    <li
                      style={{
                        display: "inline-block",
                        marginLeft: "5px",
                        fontSize: "13px",
                        fontWeight: "500",
                      }}
                    >
                      <a
                        href="https://www.zhihu.com/question/454796705/answer/3495089335"
                        style={{ color: "rgba(0,0,0,.4)" }}
                      >
                        欧洲大学申请
                      </a>
                    </li>
                    <li
                      style={{
                        display: "inline-block",
                        marginLeft: "5px",
                        fontSize: "13px",
                        fontWeight: "500",
                      }}
                    >
                      <a
                        href="https://www.zhihu.com/question/317468545/answer/3183854618"
                        style={{ color: "rgba(0,0,0,.4)" }}
                      >
                        欧洲求职
                      </a>
                    </li>
                    <li
                      style={{
                        display: "inline-block",
                        marginLeft: "5px",
                        fontSize: "13px",
                        fontWeight: "500",
                      }}
                    >
                      <a
                        href="https://zhuanlan.zhihu.com/p/692468504"
                        style={{ color: "rgba(0,0,0,.4)" }}
                      >
                        签证指南
                      </a>
                    </li>
                    <li
                      style={{
                        display: "inline-block",
                        marginLeft: "5px",
                        fontSize: "13px",
                        fontWeight: "500",
                      }}
                    >
                      <a
                        href="https://wx.zsxq.com/dweb2/index/group/28855555482841"
                        style={{ color: "rgba(0,0,0,.4)" }}
                      >
                        留学社群
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td
            valign="middle"
            style={{
              backgroundImage: "url('https://i.imgur.com/Xvb4yDd.jpeg')",
              backgroundSize: "cover",
              height: "400px",
              position: "relative",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                width: "100%",
                background: "rgba(0, 0, 0, 0.7)",
                zIndex: "-1",
              }}
            ></div>
            <table
              role="presentation"
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style={{ position: "relative", zIndex: "1" }}
            >
              <tr>
                <td>
                  <div
                    style={{
                      padding: "0 3em",
                      textAlign: "center",
                      color: "rgba(255,255,255,.8)",
                    }}
                  >
                    <h2
                      style={{
                        color: "#ffffff",
                        fontSize: "30px",
                        marginBottom: "0",
                      }}
                    >
                      我们是谁？
                    </h2>
                    <br />
                    <p style={{ color: "#ffffff" }}>
                      嘿，小伙伴们！我是Molly，你们的留学小助手！🎓
                      在这里，你可以获取德国留学的一切？
                    </p>
                    <p style={{ color: "#ffffff" }}>
                      从大学申请的细节到录取标准，从申请文书，到大学选课指南，到海外求职！💼我们会一直陪伴你整个留学生涯！🌟
                    </p>
                    <p style={{ color: "#ffffff" }}>
                      🔍推荐信 【优化个人经历】+ 【突出专业技能和研究能力】
                    </p>
                    <p style={{ color: "#ffffff" }}>
                      🔍简历 【结构化设计】+ 【提升专业适配度】
                    </p>
                    <p style={{ color: "#ffffff" }}>
                      🔍动机信 【结合职业和学业规划】+ 【个性化陈述】
                    </p>
                    <p style={{ color: "#ffffff" }}>🔍一键搞定签证材料✈️</p>

                    <p>
                      <br />
                      <a
                        href="#"
                        style={{
                          padding: "10px 20px",
                          borderRadius: "5px",
                          background: "#0d0cb5",
                          color: "#ffffff",
                          textDecoration: "none",
                        }}
                      >
                        查看小红书主页
                      </a>
                    </p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <a href="#">
                      <img
                        src="images/002-play-button.png"
                        alt=""
                        style={{
                          width: "60px",
                          maxWidth: "600px",
                          height: "auto",
                          margin: "auto",
                          display: "block",
                        }}
                      />
                    </a>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <table
        role="presentation"
        cellspacing="0"
        cellpadding="0"
        border="0"
        width="100%"
      >
        <tr>
          <td style={{ backgroundColor: "#ffffff" }}>
            <table
              role="presentation"
              cellspacing="0"
              cellpadding="0"
              border="0"
              width="100%"
            >
              <tr>
                <td style={{ backgroundColor: "#ffffff", padding: "2.5em" }}>
                  <div style={{ textAlign: "center", padding: "0 30px" }}>
                    <h2>我们为你准备了</h2>
                    <p>
                      👀
                      超多免费留学资源!💪🏻还有全球留学社群，欧洲留子聚集地，学习聚会两不误！！
                      希望真的可以帮到你🏆
                    </p>
                  </div>
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    width="100%"
                  >
                    <tr>
                      <td
                        valign="top"
                        width="33.333%"
                        style={{ paddingTop: "20px" }}
                        className={styles.services}
                      >
                        <table
                          role="presentation"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td
                              style={{
                                padding: "10px 10px 0",
                                textAlign: "center",
                              }}
                            >
                              <h3
                                style={{ fontSize: "16px", fontWeight: "600" }}
                              >
                                大学申请
                              </h3>
                              <p>🥇大学申请详解</p>
                              <p>🥇大学&专业介绍</p>
                              <p>
                                <a href="https://www.zhihu.com/question/454796705/answer/3495089335">
                                  🥇录取标准，毕业要求等
                                </a>
                              </p>
                              <p>
                                <br />
                                <a
                                  href="https://www.zhihu.com/question/313093861/answer/2944144664"
                                  style={{
                                    padding: "10px 20px",
                                    borderRadius: "5px",
                                    background: "#0d0cb5",
                                    color: "#ffffff",
                                    textDecoration: "none",
                                  }}
                                >
                                  了解更多
                                </a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td
                        valign="top"
                        width="33.333%"
                        style={{
                          paddingTop: "20px",
                          background: "rgba(0,0,0,.08)",
                        }}
                        className={styles.services}
                      >
                        <table
                          role="presentation"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td
                              style={{
                                padding: "10px 10px 0",
                                textAlign: "center",
                              }}
                            >
                              <h3
                                style={{ fontSize: "16px", fontWeight: "600" }}
                              >
                                留学社群
                              </h3>
                              <p>
                                <a href="https://wx.zsxq.com/dweb2/index/group/28855555482841">
                                  🔥加入留学申请社群
                                </a>
                              </p>
                              <p>🔥定期答疑直播，海外求职分享</p>
                              <p>🔥海外生活</p>
                              <br />
                              <p>
                                <a
                                  href="https://www.xiaohongshu.com/user/profile/62e7df6d000000001f0042e6"
                                  style={{
                                    padding: "10px 20px",
                                    borderRadius: "5px",
                                    background: "#0d0cb5",
                                    color: "#ffffff",
                                    textDecoration: "none",
                                  }}
                                >
                                  了解更多
                                </a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td
                        valign="top"
                        width="33.333%"
                        style={{ paddingTop: "20px" }}
                        className={styles.services}
                      >
                        <table
                          role="presentation"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              <img
                                src="images/003-recipe-book.png"
                                alt=""
                                style={{
                                  width: "60px",
                                  maxWidth: "600px",
                                  height: "auto",
                                  margin: "auto",
                                  display: "block",
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                padding: "10px 10px 0",
                                textAlign: "center",
                              }}
                            >
                              <h3
                                style={{ fontSize: "16px", fontWeight: "600" }}
                              >
                                签证申请
                              </h3>
                              <p>🥇签证申请要求，留学工作签证</p>
                              <p>
                                <a href="partner.fintiba.com/studentCN">
                                  🥇自保金
                                </a>
                              </p>
                              <p>
                                <a href="#">🥇医疗保险</a>
                              </p>
                              <br />
                              <p>
                                <a
                                  href="https://zhuanlan.zhihu.com/p/699837478"
                                  style={{
                                    padding: "10px 20px",
                                    borderRadius: "5px",
                                    background: "#0d0cb5",
                                    color: "#ffffff",
                                    textDecoration: "none",
                                  }}
                                >
                                  了解更多
                                </a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      {/* 你的代码结束 */}
    </div>
  );
};

export default About;
