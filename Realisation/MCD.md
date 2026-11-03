# Causivue — Modèle Conceptuel de Données (MCD)

## 1. Entités

### USER
- **User_ID** (PK)
- Name
- Email
- Password
- Role

### PROJECT
- **Project_ID** (PK)
- Name
- Description
- Status

### PROCESS
- **Process_ID** (PK)
- Name
- Description
- Status

### TASK
- **Task_ID** (PK)
- Name
- Description
- Status
- Priority

### PROBLEM
- **Problem_ID** (PK)
- Title
- Description
- Status
- Severity

### CAUSE
- **Cause_ID** (PK)
- Description

### IMPACT
- **Impact_ID** (PK)
- Description
- Severity

---

## 2. Associations et cardinalités

| N° | Entité A | Association | Entité B | Cardinalités |
|---|---|---|---|---|
| R1 | USER | PARTICIPER | PROJECT | USER (0,N) — PROJECT (1,N) |
| R2 | PROJECT | CONTENIR | PROCESS | PROJECT (1,N) — PROCESS (1,1) |
| R3 | PROCESS | CONTENIR | TASK | PROCESS (1,N) — TASK (1,1) |
| R4 | TASK | RENCONTRER | PROBLEM | TASK (0,N) — PROBLEM (1,N) |
| R5 | PROBLEM | ÊTRE EXPLIQUÉ PAR | CAUSE | PROBLEM (0,N) — CAUSE (1,N) |
| R6 | PROBLEM | PRODUIRE | IMPACT | PROBLEM (0,N) — IMPACT (1,N) |
| R7 | TASK | DÉPENDRE DE | TASK | TASK (0,N) — TASK (0,N) |

---

## 3. Schéma général

```text
USER
  |
  | R1 : PARTICIPER
  |
PROJECT
  |
  | R2 : CONTENIR
  |
PROCESS
  |
  | R3 : CONTENIR
  |
TASK
  |
  | R4 : RENCONTRER
  |
PROBLEM
  |             |
  | R5          | R6
  | ÊTRE         | PRODUIRE
  | EXPLIQUÉ PAR |
  |             |
CAUSE         IMPACT

TASK -------- R7 : DÉPENDRE DE -------- TASK
              (Relation réflexive)
```

---

## 4. Récapitulatif

- Nombre d'entités : **7**
- Nombre d'associations : **7**
- Relation réflexive : **TASK — TASK**
- Identifiants : définis pour chaque entité.
- Cardinalités : Min / Max.

## 5. Points à vérifier

- Les noms des associations sont des libellés de travail à confirmer.
- Les cardinalités sont celles validées pendant notre revue.
- La relation USER — TASK (responsabilité et affectation) reste à examiner avec la documentation officielle.
- DEPARTMENT reste **TO BE DEFINED** et n'est pas ajoutée au MCD.

**Statut :** Version de travail documentée — à comparer avec le MCD officiel avant adoption définitive.





                    ┌──────────────────┐
                    │       USER       │
                    ├──────────────────┤
                    │ PK User_ID       │
                    │ Name             │
                    │ Email            │
                    │ Password         │
                    │ Role             │
                    └──────────────────┘
                            |
                     (0,N)  |  (1,N)
                       [R1]
                            |
                            |
                    ┌──────────────────┐
                    │     PROJECT      │
                    ├──────────────────┤
                    │ PK Project_ID    │
                    │ Name             │
                    │ Description      │
                    │ Status           │
                    └──────────────────┘
                            |
                     (1,N)  |  (1,1)
                       [R2]
                            |
                    ┌──────────────────┐
                    │     PROCESS      │
                    ├──────────────────┤
                    │ PK Process_ID    │
                    │ Name             │
                    │ Description      │
                    │ Status           │
                    └──────────────────┘
                            |
                     (1,N)  |  (1,1)
                       [R3]
                            |
                    ┌──────────────────┐
                    │       TASK       │
                    ├──────────────────┤
                    │ PK Task_ID       │
                    │ Name             │
                    │ Description      │
                    │ Status           │
                    │ Priority         │
                    └──────────────────┘
                       /           \
                  [R4]               [R7]
                   /                   \ (0,N)
                  /                     \ 
         ┌────────────────┐         TASK
         │    PROBLEM     │
         ├────────────────┤
         │ PK Problem_ID  │
         │ Title          │
         │ Description   │
         │ Status         │
         │ Severity       │
         └────────────────┘
              /       \
           [R5]       [R6]
            /           \
    ┌────────────┐   ┌────────────┐
    │   CAUSE    │   │   IMPACT   │
    ├────────────┤   ├────────────┤
    │ PK Cause_ID│   │ PK Impact_ID│
    │ Description│   │ Description│
    └────────────┘   │ Severity   │
                     └────────────┘
