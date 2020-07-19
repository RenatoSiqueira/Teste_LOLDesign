# “Show me the code”

### Importante
- Orientação a objeto
- Testes
- Arquitetura/Design interno da aplicação
- Clareza e organização do código
- Para Web/Mobile

### Extras
- Interface gráfica bem acabada
- Uso avançado da linguagem e/ou framework

## Desafio
A empresa de telefonia Telzir, especializada em chamadas de longa distância nacional, vai colocar um novo produto no mercado chamado FaleMais. Normalmente um cliente Telzir pode fazer uma chamada de uma cidade para outra pagando
uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs
de origem e destino:
```
Origem  Destino  $/min
011      016     1.90
016      011     2.90
011      017     1.70
017      011     2.70
011      018     0.90
018      011     1.90 
```

Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. 
Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. 
Os planos são FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).

A Telzir, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma
página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os
códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o
plano FaleMais. 

O sistema deve mostrar dois valores: (1) o valor da ligação com o plano e (2) sem o plano. 

O custo inicial de aquisição do plano deve ser desconsiderado para este
problema.

### Stack Utilizada
- Gatsby + Tailwind + PostCSS + PurgeCSS + Jest

### Motivo
De acordo com a análise inicial, o cliente requer uma Landing Page, cuja necessidade principal é velocidade e performance. O Gatsby tem como principal vantagem gerar arquivos estáticos, favorecendo SEO em motores de busca; além do sistema de cache. Foi adicionado o Tailwind, pela liberdade de uso das Classes Utilitárias e o PurgeCSS, que exclui todos os atributos não-utilizados do 
Tailwind no projeto, resultando num asset bem compacto.

![PurgeCSS](https://github.com/RenatoSiqueira/Teste_LOLDesign/blob/master/purgeCSS.png)

Foram adicionados Testes (utilizando Jest) na Lib que faz os cálculos referentes à tarifação. Você pode vê-los em src > components > \_\_tests\_\_

### Instalar as Dependências
```
yarn
```

### Ambiente de Desenvolvimento
```
yarn develop
OU
gatsby develop
```

### Preparar para Produção
- Será gerada uma pasta public, que estará pronta para ser enviada ao servidor. Você pode visualizar localmente utilizando o comando: yarn serve
```
yarn build
OU
gatsby build
```

### Testes
```
yarn test
```

![Tests](https://github.com/RenatoSiqueira/Teste_LOLDesign/blob/master/tests.png)