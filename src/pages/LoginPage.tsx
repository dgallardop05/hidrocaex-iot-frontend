import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { login }
from '@/services/auth.service'

const LoginPage = () => {

  const navigate =
    useNavigate()

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const [error, setError] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  const handleSubmit = async (
    event: React.FormEvent,
  ) => {

    event.preventDefault()

    try {

      setLoading(true)
      setError('')

      const response =
        await login({
          email,
          password,
        })

      localStorage.setItem(
        'token',
        response.token,
      )

      navigate('/')

    } catch {

      setError(
        'Credenciales incorrectas',
      )

    } finally {

      setLoading(false)
    }
  }

  return (
    <div className="
      min-h-screen

      flex
      items-center
      justify-center

      bg-gradient-to-br
      from-[#050816]
      via-[#081225]
      to-[#0b1730]
    ">
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-md

          bg-slate-900

          border
          border-slate-700

          rounded-3xl

          p-8

          flex
          flex-col
          gap-5
        "
      >
        <h1 className="
          text-3xl
          font-bold
          text-white
          text-center
        ">
          Depósitos Piornal
        </h1>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value,
            )
          }
          className="
            p-3
            rounded-xl

            bg-slate-800
            text-white
          "
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value,
            )
          }
          className="
            p-3
            rounded-xl

            bg-slate-800
            text-white
          "
        />

        {error && (
          <div className="
            text-red-400
            text-sm
          ">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="
            p-3

            rounded-xl

            bg-blue-600
            hover:bg-blue-700

            text-white
            font-semibold
          "
        >
          {
            loading
              ? 'Accediendo...'
              : 'Iniciar sesión'
          }
        </button>
      </form>
    </div>
  )
}

export default LoginPage