<!-- TODO: update this file -->

# Blog Deploy

Blog deployment role.

## Requirements

Box should be provisioned with GitHub CLI utility `gh` and `nginx`.

## Role Variables

GitHub CLI token `GITHUB_TOKEN` needs to be provided to play this role.

## Dependencies

N/A

## Example Playbook

```yml
---
- hosts: production
  vars_files:
    - "./vars/common.yml"
  roles:
    - deploy-blog
```

## License

AGPL-3.0-only
