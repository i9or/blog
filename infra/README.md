# Blog Infrastructure

Some fancy scripts and yamls for my blog infrastructure.

## Requirements

- `ansible` v2.12+

## Keys

Key generation:

```sh
ssh-keygen -t ed25519 -C "user@example.com" -f ./keys/production_key
```

Key naming:

- `production_key` — SSH key for production

**Note: `./keys/` folder should be added to `.gitignore`!**

## Deploy

To deploy latest release:

```sh
ansible-playbook deploy.yml
```
