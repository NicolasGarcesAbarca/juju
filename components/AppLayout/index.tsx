import styles, { globalStyles } from './styles'

const Layout = ({ children }: any) => {
  return (<>
      <div>
        <main>
            {children}
        </main>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>{globalStyles}</style>
    </>)
}

export default Layout
