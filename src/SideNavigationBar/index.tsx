import { useState } from 'react'
import clsx from 'clsx'
import { FaBeer } from 'react-icons/fa'
import './styles.scss'

export default function SideNavigationBar() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <div className={clsx('sidebar', isOpen && 'open')}>
      <div className="logo-details">
        <FaBeer color="primary" className="icon" />
        <div className="logo_name">CodingLab</div>
        <FaBeer color="primary" id="btn" onClick={() => setisOpen(!isOpen)} />
      </div>
      <ul className="nav-list">
        <li>
          <a href="#">
            <FaBeer />
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <FaBeer />
            <span className="links_name">User</span>
          </a>
          <span className="tooltip">User</span>
        </li>
        <li>
          <a href="#">
            <FaBeer />
            <span className="links_name">Messages</span>
          </a>
          <span className="tooltip">Messages</span>
        </li>
        <li>
          <a href="#">
            <FaBeer />
            <span className="links_name">Analytics</span>
          </a>
          <span className="tooltip">Analytics</span>
        </li>
        <li>
          <a href="#">
            <FaBeer />
            <span className="links_name">File Manager</span>
          </a>
          <span className="tooltip">Files</span>
        </li>
        <li>
          <a href="#">
            <FaBeer />
            <span className="links_name">Order</span>
          </a>
          <span className="tooltip">Order</span>
        </li>
        <li>
          <a href="#">
            <FaBeer />
            <span className="links_name">Saved</span>
          </a>
          <span className="tooltip">Saved</span>
        </li>
        <li className="profile">
          <div className="profile-details">
            <img
              src="https://images.unsplash.com/photo-1631348676438-cc95021461d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
              alt="profileImg"
            />
            <div className="name_job">
              <div className="name">Prem Shahi</div>
              <div className="job">Web designer</div>
            </div>
          </div>
          <FaBeer color="primary" id="log_out" />
        </li>
      </ul>
    </div>
  )
}
