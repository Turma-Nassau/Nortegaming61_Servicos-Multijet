#  Loja-Multijet

# <h2>📝Descrição</h2>
<p>Este site oferece serviços de locação de impressoras, consertos de notebooks/desktop, consertos de impressoras, recarga de cartuchos e toners para usuários e empresas que precisam de soluções rápidas e eficientes para suas necessidades de impressão e informática.</p>

# <h2>📚Funcionalidades</h2>
<ul>
  <li>- Locação de impressoras
Oferecemos uma ampla gama de opções de impressoras para locação, incluindo modelos de impressoras a jato de tinta, laser e multifuncionais. Nossas impressoras são de alta qualidade e oferecem excelente desempenho, além de serem fáceis de usar e manter.</li>
  <li>- Consertos de notebooks, desktops e impressoras
Oferecemos serviços de reparo e manutenção de notebooks, desktops e impressoras para solucionar uma ampla gama de problemas, desde problemas de software até problemas de hardware. Nossa equipe de técnicos altamente qualificados tem o conhecimento e a experiência necessários para diagnosticar e reparar rapidamente seu equipamento, garantindo que você volte a usá-lo o mais rápido possível.</li>
  <li>- Recarga de cartuchos e toners
Oferecemos serviços de recarga de cartuchos de tinta e toners para ajudar nossos clientes a economizar dinheiro e reduzir o desperdício. Nossos serviços de recarga de cartuchos são de alta qualidade e funcionarão tão bem quanto os originais. Oferecemos recarga de cartuchos para uma ampla variedade de modelos de impressoras, incluindo impressoras a jato de tinta e laser.</li>
</ul>

# <h2>🔧Tecnologias Utilizadas</h2>
<ul>
  <li>**Front-end:** React</li>
  <li>**Back-end:** Node, Express, PostgreSQL</li>
</ul>

# <h2>🔜Implementações</h2>
<ul>
  <li>O projeto sofrerá alterações de melhorias no futuro</li>
</ul>

# <h2>🤝Colaboradores</h2>
  <table>
  <tr>
    <td align="center">
      <a href="https://github.com/NorteGaming61">
        <sub>
          <b>NorteGaming</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## Estrutura de Dados

- Usuario
  - Possibilidade de Fazer logins e Cadastros.

```s
    Usuario {
        id_user:1
        nome_completo:"Nome Usuario"
        email:"examplo@examplo.com"
        senha:"123LSKRdsa"
    }
```

- Serviços
  - Adicionar serviços de conserto para impressora, notebooks e desktops.

```s
    conserto_impressora{
        id_serviço:0001
        marca_da_impressora:"Brother"
        Modelo:"Laser"
        referencia:"DCP L2540DW"
        tipo:"Mono"
        serialnumber:"CQ12SQDa216sfr4"
        defeito:"Não liga"
        mais_informacoes:"impressora foi ligada no 220v e saiu fumaça"
    }
```

```s
    conserto_notedesk{
        id_serviço:0001
        marca:"Acer"
        Modelo:"Aspire 3"
        tipo:"Notebook"
        serialnumber:"CQ1a2sfr4"
        defeito:"Não da vídeo"
        mais_informacoes:"notebook está ligando mas não da vídeo"
    }
```

```s
    conserto_notedesk{
        id_serviço:0002
        marca:"Dell"
        Modelo:"OptiPlex 5000 Small"
        tipo:"Desktop"
        serialnumber:"1dsaa2sfr4"
        defeito:"Reiniciando"
        mais_informacoes:"Computador liga, mas fica reiniciando na tela de carregamento"
    }
```

  - Adicionar serviços para recarga de cartuchos ou toners.

```s
    recarga{
        id_serviço:0001
        modelo:"664"
        Modelo:"cartucho"
        quantidade:"2"
    }
```


## <h2>🎯Status do Projeto</h2>
<ul>
  <li>Em Construção</li>
</ul>

