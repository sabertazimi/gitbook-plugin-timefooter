# gitbook-plugin-timefooter

Page Footer Plugin for Gitbook (forked from [tbfed-pagefooter](https://github.com/zhj3618/gitbook-plugin-tbfed-pagefooter))

## Usage

in `book.json`:

```json
{
    "plugins": [
        "timefooter"
    ],
    "pluginsConfig": {
        "timefooter": {
            "copyright": "&copy sabertazimi",
            "modify_label": "最近更新：",
            "modify_format": "YYYY-MM-DD HH:mm"
        }
    }
}
```

> `copyright` and `modify_label` support `html` syntax