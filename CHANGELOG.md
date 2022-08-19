# minimal-digest Changelog

## 2.0.0 - 2022-xx-xx

### Changed
- **BREAKING**: Use `jsonld@7` to use `safe` mode when canonizing
  data. All terms must be fully defined and all URLs must be absolute
  in order for data to be digested without error.
- **BREAKING**: Convert to module (ESM).
- **BREAKING**: Require Node.js >=14.
- Update dependencies.
- Lint module.

## 1.0.0 - 2022-03-10

### Added
- Initial commit.
