export interface AuthProps {
  user: {
    avatar: string
    user_type_id: number
  }
  token: string
}

export interface AuthContextProps extends AuthProps {
  isLogged: boolean
  signIn(data: CredentialResponse): Promise<void>
  logout(): void
}
