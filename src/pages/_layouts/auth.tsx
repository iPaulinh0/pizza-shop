import { Outlet } from "react-router-dom";
import { PizzaIcon } from 'lucide-react' 

export function AuthLayout() {
  return(
    <div className="grid min-h-screen grid-cols-2 max-[736px]:flex max-[736px]: flex-col">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between max-[736px]:bg-white">
        <div className="flex items-center gap-3 text-lg text-foreground max-[736px]:justify-center">
          <PizzaIcon className="h-5 w-5"/>
          <span className="font-semibold">pizza.shop</span>
        </div>

        <footer className="text-sm max-[736px]:hidden">Painel do Parceiro &copy; pizza.shop - {new Date().getFullYear()}</footer>
      </div>

      <div className="flex flex-col items-center justify-center relative">
        <Outlet />
      </div>
    </div>
  )
}