import './App.css'

function App() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="container">
          <div className="logo">智能体科技</div>
          <ul className="nav-links">
            <li><a href="#about">关于我们</a></li>
            <li><a href="#business">核心业务</a></li>
            <li><a href="#org">组织架构</a></li>
            <li><a href="#team">团队成员</a></li>
            <li><a href="#case">成功案例</a></li>
            <li><a href="#contact">联系我们</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>智能体驱动未来</h1>
          <p className="tagline">打造领先的智能体软件产品与技术服务</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">联系我们</a>
            <a href="#business" className="btn btn-secondary">了解更多</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-title">
            <h2>关于我们</h2>
            <p>用技术赋能业务，用智能体改变世界</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>公司简介</h3>
              <p>
                我们是一家专注于智能体软件开发的创新型科技公司，致力于打造领先的智能体产品，
                为企业和个人提供高效、智能的技术解决方案。公司汇聚了一批来自顶尖科技公司的
                技术专家和产品人才，在智能体领域拥有丰富的研发经验。
              </p>
              <p>
                我们相信，智能体将成为未来数字世界的核心基础设施，推动各行业的智能化升级。
              </p>
            </div>
            <div className="vision-mission">
              <div className="vision">
                <h3>🎯 愿景</h3>
                <p>成为智能体领域的领军企业，让AI技术惠及每一个角落</p>
              </div>
              <div className="mission">
                <h3>🚀 使命</h3>
                <p>通过创新的智能体产品和服务，帮助企业提升效率、降低成本、实现数字化转型</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="business" id="business">
        <div className="container">
          <div className="section-title">
            <h2>核心业务</h2>
            <p>三大业务板块，全方位满足客户需求</p>
          </div>
          <div className="business-grid">
            <div className="business-card">
              <div className="business-icon">🤖</div>
              <h3>智能体软件产品开发</h3>
              <p>自主研发智能体软件产品，覆盖企业智能客服、数据分析、自动化办公等多个场景，为企业提供一站式智能解决方案。</p>
            </div>
            <div className="business-card">
              <div className="business-icon">📚</div>
              <h3>专业技术内容创作</h3>
              <p>输出高质量技术文章、解决方案白皮书和技术书籍，传播前沿技术知识，赋能行业发展。</p>
            </div>
            <div className="business-card">
              <div className="business-icon">💡</div>
              <h3>技术咨询与定制服务</h3>
              <p>提供专业的技术咨询服务，根据客户需求定制化开发智能体软件，帮助企业快速实现智能化升级。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Section */}
      <section className="org" id="org">
        <div className="container">
          <div className="section-title">
            <h2>组织架构</h2>
            <p>扁平高效的管理架构，专注执行与创新</p>
          </div>
          <div className="org-chart">
            {/* Level 1 - Board */}
            <div className="org-level">
              <div className="org-card">
                <h3>宇宙大帝</h3>
                <p>董事长</p>
              </div>
            </div>
            
            <div className="org-connector"></div>
            
            {/* Level 2 - C-Suite */}
            <div className="org-level">
              <div className="org-card">
                <h3>奥特曼</h3>
                <p>CEO</p>
              </div>
            </div>
            
            <div className="org-connector"></div>
            
            {/* Level 3 - VP */}
            <div className="org-level">
              <div className="org-card">
                <h3>托尼（钢铁侠）</h3>
                <p>CTO - 技术研发</p>
              </div>
              <div className="org-card">
                <h3>丹佛斯（惊奇队长）</h3>
                <p>COO - 运营统筹</p>
              </div>
              <div className="org-card">
                <h3>Aver</h3>
                <p>CFO - 财务与Token监控</p>
              </div>
            </div>
          </div>

          <div className="departments">
            <div className="dept-card">
              <h4>智能体软件部</h4>
              <p>负责智能体产品的研发与迭代</p>
            </div>
            <div className="dept-card">
              <h4>内容创作部</h4>
              <p>负责技术文章与方案输出</p>
            </div>
            <div className="dept-card">
              <h4>客户服务部</h4>
              <p>负责客户服务与技术支持</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team" id="team">
        <div className="container">
          <div className="section-title">
            <h2>核心团队</h2>
            <p>经验丰富的专业团队</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👑</div>
              <h3>宇宙大帝</h3>
              <p className="role">董事长</p>
              <p className="bio">公司战略决策者，负责公司长期发展规划与重大决策</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">🦸</div>
              <h3>奥特曼</h3>
              <p className="role">CEO</p>
              <p className="bio">公司整体运营负责人，统筹各业务模块协同发展</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">🦸‍♀️</div>
              <h3>丹佛斯</h3>
              <p className="role">COO</p>
              <p className="bio">负责公司日常运营统筹与流程优化</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">🧑‍💻</div>
              <h3>托尼（钢铁侠）</h3>
              <p className="role">CTO</p>
              <p className="bio">技术研发负责人，主导技术架构与产品创新</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">💰</div>
              <h3>Aver</h3>
              <p className="role">CFO</p>
              <p className="bio">财务与Token消耗监控，确保资源高效利用</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="case" id="case">
        <div className="container">
          <div className="section-title">
            <h2>成功案例</h2>
            <p>团队协作完成公司首个官网发布</p>
          </div>
          <div className="case-content">
            <div className="case-header">
              <h3>官网发布项目</h3>
              <span className="case-tag">内部协作</span>
            </div>
            
            <div className="case-section">
              <h4>📋 项目背景</h4>
              <p>公司需要一个对外展示的官方网站，体现高端定位、主营业务与组织架构。作为公司成立后的首个重要项目，这次官网发布检验了团队的协作能力。</p>
            </div>

            <div className="case-section">
              <h4>🔄 协作流程</h4>
              <div className="case-timeline">
                <div className="timeline-item">
                  <div className="timeline-phase">第一阶段</div>
                  <div className="timeline-content">
                    <strong>战略规划</strong>
                    <p>CEO（奥特曼）制定官网策划方案，明确页面结构、技术要求、责任分工</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-phase">第二阶段</div>
                  <div className="timeline-content">
                    <strong>技术开发</strong>
                    <p>CTO（托尼）使用 React + Vite + TailwindCSS 搭建项目，完成所有页面开发</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-phase">第三阶段</div>
                  <div className="timeline-content">
                    <strong>部署上线</strong>
                    <p>CTO 提交代码到 GitHub，CEO 协助配置仓库并推送 gh-pages，GitHub Pages 成功发布</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-section">
              <h4>🛠 技术栈</h4>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Vite</span>
                <span className="tech-tag">TailwindCSS</span>
                <span className="tech-tag">GitHub Pages</span>
                <span className="tech-tag">Git</span>
              </div>
            </div>

            <div className="case-section">
              <h4>💡 经验总结</h4>
              <ul className="case-lessons">
                <li>串行与并行结合：策划→开发→部署，环节间串行，环节内并行推进</li>
                <li>明确责任分工：各司其职，CEO 统筹协调，CTO 执行技术任务</li>
                <li>快速响应：从任务下达到上线发布，团队高效协同完成</li>
              </ul>
            </div>

            <div className="case-link">
              <a href="https://JamesFeiPF.github.io/mainstaion" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                🔗 查看官网
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>联系我们</h2>
            <p>期待与您的合作</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>联系方式</h3>
              <div className="contact-item">
                <span>📧</span>
                <span>contact@company.com</span>
              </div>
              <div className="contact-item">
                <span>📍</span>
                <span>北京市朝阳区科技园区</span>
              </div>
              <div className="contact-item">
                <span>💬</span>
                <span>欢迎通过邮箱或社交媒体联系我们</span>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="您的姓名" />
              <input type="email" placeholder="您的邮箱" />
              <textarea placeholder="请输入您的留言..."></textarea>
              <button type="submit" className="btn btn-primary">发送留言</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2026 智能体科技. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App