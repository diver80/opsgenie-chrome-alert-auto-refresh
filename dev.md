# Development

## TODO
- prevent reload when focus is in search bar
- prevent reload when search dialog is open

## content_script vs. background script

To activate autorefresh onclick replace in manfesit.json

```javascript
"content_scripts": [
    {
    "matches": [
            "https://*opsgenie.com/alert/list"
        ],
        "js": [
            "alertautorefresh.js"
        ]
    }
],
```

with

```javascript
"background": {
    "persistent": false,
    "scripts": [
        "background.js"
    ]
},
```

