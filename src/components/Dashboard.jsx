import React,{useState} from 'react'
import {Card,Button, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const {user,logout}  = useAuth()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleClick = async()=>{
    try {
      setLoading(true)
      await logout()
      navigate('/login')
    } catch (error) {
      console.log(error)
      setError('Failed to Log Out')
    }
    setLoading(false)
  }
  return (
    <>
    <Card>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Card.Body>
        <h2 className='text-center mt-10 mb-4'>Profile</h2>
        <strong>Email: {user.email}</strong>
        <Button disabled={loading} className='w-100 mt-2' variant='link' onClick={handleClick}>Log Out</Button>
      </Card.Body>

    </Card>
    
    </>

  )
}
