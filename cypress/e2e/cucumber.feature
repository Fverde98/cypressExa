Feature: Demo de cucumber

    demo 
    Scenario: Demo cucumber
    Given Abrir el navegador principal
    When Cargando el nombre <name>
    When Cargando el email <dir>
    And Cargando la direccion <dir2>
    Then Validar el nombre de la pagina

    Example: 
        | name | dir | dir2 |
        | fernando | rimac | lima |
        | ronaldo | rimac | lima |
        | messi | rimac | lima |
        | britos | rimac | lima |