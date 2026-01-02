---
{"publish":true,"created":"2026-01-02T11:32:51.120+08:00","modified":"2026-01-02T11:34:15.128+08:00","cssclasses":""}
---

```base
columns:
  - file.name
  - file.folder
  - file.mtime
sort:
  - field: file.mtime
    order: desc
filters:
  and:
    - file.tags.contains("note")
    - 关联项目.containsAny(link("251214CPA会计"))
views:
  - type: table
    name: 表格
    groupBy:
      property: 笔记类型
      direction: ASC
    order:
      - file.name
      - 笔记状态
      - 笔记类型
      - tags
    sort: []
    columnSize:
      file.name: 230
      note.笔记状态: 129
      note.笔记类型: 186
      file.mtime: 146

```
