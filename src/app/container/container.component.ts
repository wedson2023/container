import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})
export class ContainerComponent implements OnInit {

  navigator:any = [];
  constructor() { 
    var tela = $('.tela_container');

    tela.click(function(){
      $('i.menu').click();
    });

    var nav = $('nav.menu');

    $('i.menu').click(function(){
      if(nav.is(':visible'))
      {
        tela.fadeOut();
        nav.animate({
          'margin-left' : '-65%'
        }, 500, function(){
          $(this).css({ 'display' : 'none' });
        });
      }
      else
      {
        tela.fadeIn();
        nav.css({ 'display' : 'block' }).animate({
          'margin-left' : '0'
        }, 500);
      }
    })

    // abrir o sub menu
    $('body').on('click', 'a.sub', function(){
      var div = $(this).parent().children('div');
      console.log('entrou');
      div.slideToggle();
    })
  }

  ngOnInit() {
    this.navigator.push(
      {
        icon : 'settings',
        name : 'Dashboard',
        link : '/dashboard'
      },
      {
        icon : 'attach_money',
        name : 'Paginas',
        link : '/paginas',
        page : [
          {
            icon : 'gavel',
            name : 'Página 01',
            link : '/fechamento-diario',
          },
          {
            icon : 'save_alt',
            name : 'Página 02',
            link : '/prestacao-de-conta',
          }
        ]
      },
      {
        icon : 'list',
        name : 'Usuários',
        link : '/usuarios'
      }
    );
  }

}
