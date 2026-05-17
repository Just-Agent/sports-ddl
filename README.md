# 体育赛事 DDL

> Just-DDL Network 独立专题仓库。中文优先展示，重点覆盖乒乓球、羽毛球、马拉松与田径。每条事件都带倒计时、来源和校验入口。

## 页面

- GitHub Pages: https://just-agent.github.io/sports-ddl/
- Hub: https://just-agent.github.io/just-ddl/#/topic/sports-ddl
- Repo: https://github.com/Just-Agent/sports-ddl

## 子专题

| 子专题 | 条目 |
| --- | ---: |
| 乒乓球 | 12 |
| 羽毛球 | 14 |
| 路跑与田径 | 5 |

## 数据概览

| 指标 | 数值 |
| --- | ---: |
| 当前事件 | 31 |
| 来源族 | 5 |
| 下一条 | WTT Contender Lagos 2026 / 2026-05-19 |

## 数据链路

- `data/items.json`: 体育事件数据，每条事件包含 `deadline`、`url`、`source` 和 `subtopic`。
- `data/sources.json`: 官方来源和聚合来源清单。
- `scripts/crawl-sources.mjs`: source-specific crawler，会逐个探测 ITTF/WTT、BWF、World Athletics 和马拉松官方入口。
- `scripts/validate-data.mjs`: 数据质量校验。
- `scripts/link-check.mjs`: 链接检查，默认 warning-only，设置 `STRICT_LINK_CHECK=1` 后严格失败。

## 本地校验

```bash
npm run crawl
npm run validate
npm run link-check
STRICT_LINK_CHECK=1 npm run link-check
```

## 自动更新

`.github/workflows/update-data.yml` 每周运行 crawler、validator 和 link-check。更新成功后会通过 `repository_dispatch` 通知 Just-DDL Hub 同步。

> 微信小程序版本即将上线，敬请期待。
