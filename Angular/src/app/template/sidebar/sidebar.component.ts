import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';
import {UsuarioService} from '../../usuario.service';
import {Usuario} from '../../login/usuario';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuarioLogado: string;
  usuarios: Usuario[] = [];
  userLog: string;
  adminUser: boolean;
  managerUser: boolean;
  userUser: boolean;
  perfilUser: string[];

  constructor(
    private authService: AuthService,
    private service: UsuarioService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    this.service
      .getUsuarioByUser(this.usuarioLogado)
      .subscribe(response => {
        this.usuarios = response;
        console.log(this.usuarios);


        this.perfilUser = this.usuarios.map(function(item, indice: 0) {
          return item.perfil;
        });

        console.log(this.perfilUser.toString());
        console.log(this.perfilUser.toString() === 'manager');
        if (this.perfilUser.toString() === 'admin') {
          this.adminUser = true;
        };
        if (this.perfilUser.toString() === 'manager') {
          this.managerUser = true;
          console.log(this.managerUser);
        };
        if (this.perfilUser.toString() === 'user') {
          this.userUser = true;
        };
      });
  }

  logout() {
    this.authService.encerrarSessao();
    this.router.navigate(['/login']);
  }

  imprimeRelatorio() {
    return this.authService.downloadPdfRelatorio();
  }
}
